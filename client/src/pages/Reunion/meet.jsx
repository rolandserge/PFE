import { useState, useEffect, useRef } from "react";
import { DyteMeeting, provideDyteDesignSystem } from "@dytesdk/react-ui-kit";
import { useDyteClient } from "@dytesdk/react-web-core";
import { useCreateMeetingMutation, useJoinMeetingMutation } from "../../slices/meetApiSlice";

const Meet = () => {

	const meetingEl = useRef();
	const [meeting, initMeeting] = useDyteClient();
	const [userToken, setUserToken] = useState();
	const [meetingId, setMeetingId] = useState();
    const [ createMeeting ] = useCreateMeetingMutation()
    const [ joinMeeting ] = useJoinMeetingMutation()


	// const createMeetingId = async () => {

	// 	const { data } = await createMeeting();

	// 	setMeetingId(data);
	// };

	useEffect(() => {
		const id = window.location.pathname.split("/")[2];
		// if (!id) {
		// 	createMeetingId();
		// } else {
			setMeetingId(id);
		// }
	}, []);

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
				<div>Loading...</div>
			)}
		</div>
	);
};

export default Meet;