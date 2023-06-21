import React from 'react';
import { useMutation } from '@apollo/client';
import { MARK_ATTENDANCE } from '../../graphql/mutations';
import { useQueryClient } from 'react-query';

function MarkAttendanceButton() {
  const queryClient = useQueryClient();
  const [markAttendance] = useMutation(MARK_ATTENDANCE);

  const handleMarkAttendance = () => {
    const date = new Date().toISOString().split('T')[0];
    markAttendance({
      variables: {
        studentId: 1, // Replace with the actual student ID
        date: date,
      },
    }).then(() => {
      queryClient.invalidateQueries('attendance');
    });
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4"
      onClick={handleMarkAttendance}
    >
      Mark Attendance
    </button>
  );
}

export default MarkAttendanceButton;
