// Get the form element
const form = document.querySelector('#searchForm');

// Add event listener for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the input value from the text field
  const inputField = document.querySelector('#searchInput');
  const inputValue = inputField.value;

  // Split the comma-separated values
  const values = inputValue.split(',');

  // Initialize variables to store the searchName and searchLocation inputs
  const searchname = document.querySelector('#searchname');
  const searchlocation = document.querySelector('#searchlocation');

  // Check if only 'name' is entered
  if (values.length === 1 & values[0].search(':')==-1) {
    searchname.value = values[0].trim();
  } else {
    console.log(values)
    //check if key:value format
    if(values[0].search(':')!=-1){
        const valuePair= values[0].split(':');
        console.log("valuePair[0]")
        values.forEach((pair) => {
            console.log('value')
            // Split each pair at ':' to separate the key and value
            const value= pair.split(':');
            // Remove leading/trailing spaces from the key and value
            const cleanKey = value[0].trim();
            const cleanValue = value[1].trim();
        
            // Check if the key is 'name' or 'location' and assign the value accordingly
            if (cleanKey === 'name') {
              searchname.value = cleanValue;
            } else if (cleanKey === 'location') {
              searchlocation.value = cleanValue;
            }
          });
    }
    //input present in comma-separeted format
    else{

        searchname.value = values[0].trim();
        searchlocation.value = values[1].trim();
    }
  }

  // Perform any additional operations with the searchName and searchLocation variables as needed

  // Submit the form with the modified data
  console.log(searchname.value)
  console.log(searchlocation.value)
  form.submit();
});
