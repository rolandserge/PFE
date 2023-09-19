import React, { useEffect, useState } from 'react';
import { Button } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateMeetingMutation, useGetMeetingIdQuery } from '../../slices/meetApiSlice';


export default function Index() {

	const navigate = useNavigate()
	const { data } = useGetMeetingIdQuery()
	const [ createMeeting ] = useCreateMeetingMutation() 

	const HandleCreateMeeting = async () => {

		const { data } = await createMeeting();

		navigate(`/reunion/${data}`)

	};

	return (
		<div className='flex justify-between m-8'>
			<div className=''>
			{
				data && data.data.map((meet, index) => (
					<div className='m-5 text-[blue]' key={index}>
						<Link to={`/reunion/${meet.meetingId}`}>Cliquer pour acceder a cette reunion</Link>
					</div>
				))
			}
			</div>
			<div>
				<Button
					className='bg-[#ff7f00]'
					color='orange'
					h="8vh"
					onClick={HandleCreateMeeting}
				>
					Créer une reunion
				</Button>
			</div>
		</div>
	)
}