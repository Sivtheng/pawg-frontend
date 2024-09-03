export async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  
    const formData = new FormData(event.currentTarget);
  
    // Collect data from form fields
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phoneNumber: formData.get('phoneNumber') as string,
      address: formData.get('address') as string,
      workingHours: formData.get('workingHours') as string,
      personalityTrait: formData.get('personalityTrait') as string,
      livingSituation: formData.get('livingSituation') as string,
      otherAnimals: formData.get('otherAnimals') as string,
      accessToStreet: formData.get('accessToStreet') as string,
      travelFrequency: formData.get('travelFrequency') as string,
      leaveCambodia: formData.get('leaveCambodia') as string,
      feedingIntention: formData.get('feedingIntention') as string,
      additionalInfo: formData.get('additionalInfo') as string,
      fosteringOrAdopting: formData.get('fosteringOrAdopting') as string,
      typeOfAnimal: formData.get('typeOfAnimal') as string,
      specialNeeds: formData.get('specialNeeds') as string,
      ownedPets: formData.get('ownedPets') as string,
    };
  
    // Example API endpoint
    const apiEndpoint = '/api/submit-adoption-form';
  
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