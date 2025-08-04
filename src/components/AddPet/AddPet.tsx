import PetBlock from '@/components/PetBlock/PetBlock';
import s from './AddPet.module.scss';
import imageMobile1x from '../../assets/images/add-pet/image_mobile.png';
import imageMobile2x from '../../assets/images/add-pet/image_mobile@2x.png';
import imageTablet1x from '../../assets/images/add-pet/image_tablet.png';
import imageTablet2x from '../../assets/images/add-pet/image_tablet@2x.png';
import imagePc1x from '../../assets/images/add-pet/image_pc.png';
import imagePc2x from '../../assets/images/add-pet/image_pc@2x.png';
import AddPetForm from '@/components/AddPetForm/AddPetForm';

export interface AddPetProps {}

const AddPet = ({}: AddPetProps) => {
  return (
    <div className={s.addPet}>
      <PetBlock
        imageMobile1x={imageMobile1x}
        imageMobile2x={imageMobile2x}
        imageTablet1x={imageTablet1x}
        imageTablet2x={imageTablet2x}
        imagePc1x={imagePc1x}
        imagePc2x={imagePc2x}
        imgAlt={'Dog'}
        imgWidth="335"
        imgHeight="280"
      />

      <AddPetForm />
    </div>
  );
};

export default AddPet;
