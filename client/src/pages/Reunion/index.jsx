import React, { useEffect, useState } from 'react';
import { Button } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateMeetingMutation, useGetMeetingIdQuery } from '../../slices/meetApiSlice';
import { useSelector } from 'react-redux';


export default function Index() {

	// const navigate = useNavigate()
	// const { data } = useGetMeetingIdQuery()
	// const [ createMeeting ] = useCreateMeetingMutation()


	// const HandleCreateMeeting = async () => {

	// 	const { data } = await createMeeting();

	// 	navigate(`/reunion/${data}`)

	// };

	// const linkMeet = data && [...data.data].reverse()

	// return (
	// 	<div className='flex justify-between m-8'>
	// 		<div className=''>
	// 		{
	// 			linkMeet && linkMeet.slice(0, 1).map((meet, index) => (
	// 				<div className='m-5 border p-4 bg-[#008000] text-white' key={index}>
	// 					<Link to={`/reunion/${meet.meetingId}`}>Acceder à la reunion</Link>
	// 				</div>
	// 			))
	// 		}
	// 		</div>
	// 		<div>
	// 		{
	// 			userInfo.role != "Apprenant" &&
	// 			<Button
	// 				className='bg-[#ff7f00]'
	// 				color='orange'
	// 				h="8vh"
	// 				onClick={HandleCreateMeeting}
	// 			>
	// 				Créer une reunion
	// 			</Button>
	// 		}
	// 		</div>
	// 	</div>
	// )
}