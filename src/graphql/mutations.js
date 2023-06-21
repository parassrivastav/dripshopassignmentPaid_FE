import { gql } from '@apollo/client';

export const MARK_ATTENDANCE = gql`
  mutation MarkAttendance($studentId: Int!, $date: String!) {
    markAttendance(studentId: $studentId, date: $date) {
      id
      studentId
      date
    }
  }
`;
