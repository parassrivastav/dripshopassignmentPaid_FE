import { gql } from '@apollo/client';

export const GET_ATTENDANCE = gql`
  query GetAttendance {
    studentAttendance {
      id
      studentId
      date
    }
  }
`;
