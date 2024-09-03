import { handleSubmit } from "./handleSubmit";

const Form: React.FC = () => {
    return (
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
        {/* Text Fields */}
        <div className="flex items-center space-x-4">
          <label className="w-1/3 text-right font-semibold" htmlFor="name">Name<span className="text-red-500">*</span></label>
          <input type="text" name="name" id="name" placeholder='First and Last name' className="w-2/3 p-3 border border-gray-300 rounded-md" required />
        </div>
        <div className="flex items-center space-x-4">
          <label className="w-1/3 text-right font-semibold" htmlFor="email">Email<span className="text-red-500">*</span></label>
          <input type="email" name="email" id="email" placeholder='example@example.com'  className="w-2/3 p-3 border border-gray-300 rounded-md" required />
        </div>
        <div className="flex items-center space-x-4">
          <label  className="w-1/3 text-right font-semibold" htmlFor="phone">Phone Number<span className="text-red-500">*</span></label>
          <input type="tel" name="phone" id="phone" placeholder='(000) 000-0000' className="w-2/3 p-3 border border-gray-300 rounded-md" required />
        </div>
        <div className="flex items-center space-x-4">
          <label className="w-1/3 text-right font-semibold" htmlFor="address">Address<span className="text-red-500">*</span></label>
          <input type="text" name="address" id="address" placeholder='Home address, City, State/Province...'  className="w-2/3 p-3 border border-gray-300 rounded-md" required/>
        </div>
        {/* Radio Button Groups */}
        <div className="flex items-center space-x-4">
          <p className="w-1/3 text-right font-semibold">Are you interested in fostering or adopting?<span className="text-red-500">*</span></p>
          <div className="w-2/3 flex items-center space-x-4">
            <label className="flex items-center"><input type="radio" name="interestType" value="fostering" className="mr-2" required/>Fostering</label>
            <label className="flex items-center"><input type="radio" name="interestType" value="adopting" className="mr-2" required/>Adopting</label>
            <label className="flex items-center"><input type="radio" name="interestType" value="adopting" className="mr-2" required/>No Preference</label>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <p className="w-1/3 text-right font-semibold">What type of animal would you like to adopt/foster?<span className="text-red-500">*</span></p>
          <div className="w-2/3 flex items-center space-x-4">
            <label className="flex items-center"><input type="radio" name="animalType" value="dog" className="mr-2" required/>Dog</label>
            <label className="flex items-center"><input type="radio" name="animalType" value="cat"  className="mr-2" required/>Cat</label>
            <label className="flex items-center"><input type="radio" name="animalType" value="other"  className="mr-2" required/>No Preference</label>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <p className="w-1/3 text-right font-semibold">Are you interested in adopting/fostering a special needs animal?<span className="text-red-500">*</span></p>
          <div className="w-2/3 flex items-center space-x-4">
            <label className="flex items-center"><input type="radio" name="specialNeeds" value="yes"  className="mr-2" required/>Yes</label>
            <label className="flex items-center"><input type="radio" name="specialNeeds" value="no"  className="mr-2" required/>No</label>
            <label className="flex items-center"><input type="radio" name="specialNeeds" value="maybe" className="mr-2" required/>No Preference</label>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <p className="w-1/3 text-right font-semibold">Have you owned pets before?<span className="text-red-500">*</span></p>
          <div className="w-2/3 flex items-center space-x-4">
            <label className="flex items-center"><input type="radio" name="ownedPets" value="yes" className="mr-2" required/>Yes</label>
            <label className="flex items-center"><input type="radio" name="ownedPets" value="no"  className="mr-2" required/>No</label>
          </div>
        </div>
        {/* Textareas */}
        <div className="flex items-center space-x-4">
          <label className="w-1/3 text-right font-semibold"htmlFor="workingHours">What are your usual working hours and days?<span className="text-red-500">*</span></label>
          <textarea name="workingHours" id="workingHours" className="w-2/3 p-3 border border-gray-300 rounded-md" rows={3} required></textarea>
        </div>
        <div className="flex items-center space-x-4">
          <label className="w-1/3 text-right font-semibold" htmlFor="personalityTrait">What personality trait are you looking for in the animal?<span className="text-red-500">*</span></label> 
          <textarea name="personalityTrait" id="personalityTrait" className="w-2/3 p-3 border border-gray-300 rounded-md" rows={3} required></textarea>
        </div>
        <div className="flex items-center space-x-4">
          <label className="w-1/3 text-right font-semibold" htmlFor="livingSituation">What is your current living situation?<span className="text-red-500">*</span></label>
          <textarea name="livingSituation" id="livingSituation" placeholder='Eg. courtyard, one bedroom, balcony, roommates, children, quiet/noisy, etc.' className="w-2/3 p-3 border border-gray-300 rounded-md" rows={3} required ></textarea>
        </div>
        <div className="flex items-center space-x-4">
          <label className="w-1/3 text-right font-semibold"htmlFor="otherAnimals">Are there other animals living with you?<span className="text-red-500">*</span></label>
          <textarea name="otherAnimals" id="otherAnimals" className="w-2/3 p-3 border border-gray-300 rounded-md" rows={3} required></textarea>
        </div>
        <div className="flex items-center space-x-4">
          <label className="w-1/3 text-right font-semibold" htmlFor="accessToStreet" >Will the animal(s) have access to the street/balcony/garden without supervision?<span className="text-red-500">*</span></label>
          <textarea name="accessToStreet" id="accessToStreet" className="w-2/3 p-3 border border-gray-300 rounded-md" rows={3} required></textarea>
        </div>
        <div className="flex items-center space-x-4">
          <label className="w-1/3 text-right font-semibold" htmlFor="travelFrequency">Do you travel frequently? If yes, please provide details.<span className="text-red-500">*</span></label>
          <textarea name="travelFrequency" id="travelFrequency" className="w-2/3 p-3 border border-gray-300 rounded-md" rows={3} required ></textarea>
        </div>
        <div className="flex items-center space-x-4">
          <label className="w-1/3 text-right font-semibold"htmlFor="leavingCambodia">Are you planning to leave Cambodia? If so, when?<span className="text-red-500">*</span></label>
          <textarea name="leavingCambodia" id="leavingCambodia" className="w-2/3 p-3 border border-gray-300 rounded-md" rows={3} required></textarea>
        </div>
        <div className="flex items-center space-x-4">
          <label className="w-1/3 text-right font-semibold" htmlFor="feedingPlans">What and how do you intend to feed the animal?<span className="text-red-500">*</span></label>
          <textarea name="feedingPlans" id="feedingPlans" className="w-2/3 p-3 border border-gray-300 rounded-md" rows={3} required></textarea>
        </div>
        <div className="flex items-center space-x-4">
          <label className="w-1/3 text-right font-semibold" htmlFor="additionalInfo">Is there anything else you would like us to know?</label>
          <textarea name="additionalInfo" id="additionalInfo" className="w-2/3 p-3 border border-gray-300 rounded-md" rows={3}></textarea>
        </div>
        {/* Consent Checkbox */}
        <div className="flex items-center space-x-4">
          <div className="w-2/3 flex items-center">
            <label className="flex items-center"><input type="checkbox" name="consent" id="consent" className="mr-2" required/>I consent to PAWG storing my submitted information. I confirm that I agree with the Privacy and Policy and Terms and Conditions.</label>
          </div>
        </div>
        {/* Submit Button */}
        <div className="flex justify-center">
          <button type="submit" className="bg-primary text-black py-3 px-6 rounded-lg hover:bg-accent transition-colors font-semibold text-lg" >Submit</button>
        </div>
    </form>
    );
};

export default Form;