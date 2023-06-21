const API_URL = 'http://localhost:4000/graphql'; // Replace with your backend server URL

async function makeRequest(query, variables) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const result = await response.json();

  if (response.ok) {
    return result.data;
  } else {
    throw new Error(result.errors?.[0].message || 'Something went wrong');
  }
}

export async function getAttendance() {
  const query = `
    query GetAttendance {
      studentAttendance {
        id
        studentId
        date
      }
    }
  `;
  return makeRequest(query);
}

export async function markAttendance(studentId, date) {
  const mutation = `
    mutation MarkAttendance($studentId: Int!, $date: String!) {
      markAttendance(studentId: $studentId, date: $date) {
        id
        studentId
        date
      }
    }
  `;
  const variables = { studentId, date };
  return makeRequest(mutation, variables);
}
