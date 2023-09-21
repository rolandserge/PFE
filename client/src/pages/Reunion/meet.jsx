import { useState, useEffect, useRef } from "react";
import { Loader } from '@mantine/core';
import { DyteMeeting, provideDyteDesignSystem } from "@dytesdk/react-ui-kit";
import { useDyteClient } from "@dytesdk/react-web-core";
import { useCreateMeetingMutation, useJoinMeetingMutation } from "../../slices/meetApiSlice";
import { useNavigate } from "react-router-dom";

const Meet = () => {

	const meetingEl = useRef();
	const [meeting, initMeeting] = useDyteClient();
	const [userToken, setUserToken] = useState();
	const [meetingId, setMeetingId] = useState();
	const navigate = useNavigate()
    const [ createMeeting ] = useCreateMeetingMutation()
    const [ joinMeeting ] = useJoinMeetingMutation()


	// const createMeetingId = async () => {

	// 	const { data } = await createMeeting();

	// 	setMeetingId(data);
	// };

	useEffect(() => {
		const id = window.location.pathname.split("/")[2];
		if (!id) {
			navigate('/acceuil')
		} else {
			setMeetingId(id);
		}
	}, [navigate]);

	const joinMeetingId = async () => {

		if (meetingId) {

			const { data } = await joinMeeting(meetingId);

			await initMeeting({
				authToken: data,
				defaults: {
					audio: false,
					video: false,
				},
			});

			setUserToken(data);
		}
	};

	useEffect(() => {

		if(meetingId && !userToken) joinMeetingId();

	}, [meetingId]);

	useEffect(() => {
		if (userToken) {
			provideDyteDesignSystem(meetingEl.current, {
				theme: "dark",
			});
		}
	}, [userToken]);

	return (
		<div style={{ height: '82vh', marginTop: "1.5em" }}>
			{userToken && meetingId ? (
				<DyteMeeting mode="fill" meeting={meeting} ref={meetingEl} />
			) : (
				<div className="h-[80vh] flex justify-center items-center">
					<Loader size={60} color="orange" />
				</div>
			)}
		</div>
	);
};

export default Meet;