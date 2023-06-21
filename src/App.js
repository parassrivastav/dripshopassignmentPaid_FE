import React from 'react';
import AttendanceList from './components/AttendanceList/AttendanceList';
import MarkAttendanceButton from './components/MarkAttendanceButton/MarkAttendanceButton';

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mt-4">Attendance App</h1>
      <MarkAttendanceButton />
      <AttendanceList />
    </div>
  );
}

export default App;
