import AddPet from '@/components/AddPet/AddPet';
import { Meta, Title } from 'react-head';

export interface AddPetPageProps {}

const AddPetPage = ({}: AddPetPageProps) => {
  return (
    <>
      <Title>Add Pet | Petlove</Title>
      <Meta
        name="description"
        content="Add information about your pet to Petlove: upload a photo, choose a category, and fill in the details. Make your pet visible to the community and help them find a new home or friends."
      />
      <AddPet />
    </>
  );
};

export default AddPetPage;
