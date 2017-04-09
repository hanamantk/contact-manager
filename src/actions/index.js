/*

  Description   : these Set of Actions made by user 
                  these actions are dispatched to reducer to
                  change appliction state
*/

export const getData = (person) => {
  return {
    type: 'GET_PROF_DATA',
    person
  };
}

export const addContact = (profile) => {
  return {
    type: 'ADD_CONTACT',
    profile
  };
}

export const updateContact = (updateProfile) => {
  return {
    type: 'UPDATE_CONTACT',
    updateProfile
  };
}

export const deleteContact = (id) => {
  return {
    type: 'DELETE_CONTACT',
    id
  };
}

