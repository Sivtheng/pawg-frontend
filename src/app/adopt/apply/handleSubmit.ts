export async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  // Collect data from form fields
  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phoneNumber: formData.get('phoneNumber') as string,
    address: formData.get('address') as string,
    interestInAdopting: formData.get('interestInAdopting') as string,
    typeOfAnimal: formData.get('typeOfAnimal') as string,
    specialNeedsAnimal: formData.get('specialNeedsAnimal') as string,
    ownPetBefore: formData.get('ownPetBefore') as string,
    workingTime: formData.get('workingTime') as string,
    livingSituation: formData.get('livingSituation') as string,
    otherAnimals: formData.get('otherAnimals') as string,
    animalAccess: formData.get('animalAccess') as string,
    travel: formData.get('travel') as string,
    feed: formData.get('feed') as string,
    leaveCambodia: formData.get('leaveCambodia') as string,
    anythingElse: formData.get('anythingElse') as string,
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
