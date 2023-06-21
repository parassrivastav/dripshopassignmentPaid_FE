import React from 'react';

function AttendanceItem({ attendance }) {
  return (
    <li>
      Student ID: {attendance.studentId}, Date: {attendance.date}
    </li>
  );
}

export default AttendanceItem;
