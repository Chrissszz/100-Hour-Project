const access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJEcmFwdTRzam8wODVhd1BJek5KdjBTTTFCWFEzb1lQUWpPTG9TNGdmVlNLYVZKZmJFciIsImp0aSI6IjIyZTgxZTNjZTBiYTE0YmUxN2UwNTMwMzk1NDc1MjhhZGQxY2QzN2M0OGM2ZTYzNDZjZWZkNmI1MDgyMGJhNjViYzkyYWMxNmMxZmQ4ZDUzIiwiaWF0IjoxNjc5OTgyMTE5LCJuYmYiOjE2Nzk5ODIxMTksImV4cCI6MTY3OTk4NTcxOSwic3ViIjoiIiwic2NvcGVzIjpbXX0.BF2rbg5oEQdzgdqRLi-G6UuCMk5PaTaG9dEX49qHbghDRAqBBjf9h4bnXftGGF_fqH2S285wUOXAWoT18T2bZaSCwbtuPSQA1_FQNWKNEcEEFtJ61Q2CMv5QD4qC8k0dqRpwx4stsXtPSGza66l4qpRAGg4lt_rCxdJkQg0i19xNoiuabxy0ebdN9sIchZG6nbZsJTlcrX_Tq_HhB1IOkXX6kaWFwmWN9eun5370eNmRHaltwMGhQHbNz73VGcGmXBWATsM052eQxkIsPgwjabBaFyoJrmqLs-XjaquoEYdwuxj8oB3AFK_8OFr3XmzyfXxIjQEjE9U2X_xlE-9CAQ";

const requestOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${access_token}`
  }
};

fetch('https://api.petfinder.com/v2/animals', requestOptions)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
