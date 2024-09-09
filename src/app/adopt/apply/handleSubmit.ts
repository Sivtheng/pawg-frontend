export async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  // Collect data from form fields
  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone_number: formData.get('phone_number') as string,
    address: formData.get('address') as string,
    interest_in_adopting: formData.get('interest_in_adopting') as string,
    type_of_animal: formData.get('type_of_animal') as string,
    special_needs_animal: formData.get('special_needs_animal') as string,
    own_pet_before: formData.get('own_pet_before') as string,
    working_time: formData.get('working_time') as string,
    living_situation: formData.get('living_situation') as string,
    other_animals: formData.get('other_animals') as string,
    animal_access: formData.get('animal_access') as string,
    travel: formData.get('travel') as string,
    feed: formData.get('feed') as string,
    leave_cambodia: formData.get('leave_cambodia') as string,
    anything_else: formData.get('anything_else') as string,
  };

  // Log collected data for debugging
  console.log('Form Data:', data);

  // Updated API endpoint for adoption form
  const apiEndpoint = 'http://localhost:8080/public/submit-adoption-form';

  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    // Handle success (e.g., redirect or show a success message)
    alert('Form submitted successfully!');
  } catch (error) {
    console.error('Error:', error);
    // Handle error (e.g., show an error message)
    alert('An error occurred while submitting the form.');
  }
}
