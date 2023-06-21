import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ATTENDANCE } from '../../graphql/queries';
import AttendanceItem from '../AttendanceItem/AttendanceItem';

function AttendanceList() {
  const { loading, error, data } = useQuery(GET_ATTENDANCE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul className="mt-4">
      {data.studentAttendance.map((attendance) => (
        <AttendanceItem key={attendance.id} attendance={attendance} />
      ))}
    </ul>
  );
}

export default AttendanceList;
