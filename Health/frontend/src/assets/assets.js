import appointment_img from './appointment_img.jpg'
import header_img from './header_img.jpg'
import profile_pic from './profile_pic.jpg'
import contact_image from './contact_image.png'
import about_image from './about_image.jpeg'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import paypal_logo from './paypal_logo.png'
import visa_logo from './visa_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    paypal_logo,
    visa_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Anushka Perera',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Anushka Perera is dedicated to providing comprehensive medical care, focusing on preventive medicine and effective treatment strategies. And also has a strong commitment to delivering comprehensive medical care, evaluate and check colds, flu, hypertension, and asthma.',
        fees:3000,
        address: {
            line1: '123 Galle Road',
            line2: 'Colombo 3'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Nadee Fernando',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Nadee Fernando has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 20000,
        address: {
            line1: '456 Flower Road',
            line2: 'Ring Road, Colombo'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Michael Brown',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MD, Dermatologist',
        experience: '6 Years',
        about: 'Dr. Brown focuses on skin health, offering treatments for a variety of dermatological conditions.',
        fees: 5000,
        address: {
            line1: '789 Marine Drive',
            line2: 'Colombo 4'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Chris Miller',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: '"Dr. Miller is devoted to the health and well-being of children, offering compassionate and thorough pediatric care.',
        fees: 4500,
        address: {
            line1: '9th Avenue, South End',
            line2: '89 Bankshall Street, Colombo'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Priya Gariya',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS, MD (Neurology)',
        experience: '4 Years',
        about: 'Dr. Priya specializes in neurological disorders, providing comprehensive assessments and treatments.',
        fees: 12000,
        address: {
            line1: '47th CrossMax',
            line2: 'Circle, Cross Road, Colombo'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Andrew William',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Andrew treate patients suffer from  migraines, tension-type headaches, and cluster headaches. He diagnoses chronic neurological disorders, helping patients manage their conditions over time.',
        fees: 15000,
        address: {
            line1: '67th Street, Central',
            line2: 'Temple Road, Maharagama'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Malinga Wilson',
        image: doc7,
        speciality: 'Gastroenterologist',
        degree: 'PHD',
        experience: '2 Years',
        about: 'Dr. Malinga specializes in diagnosing and treating conditions related to the gastrointestinal (GI) tract. This includes the esophagus, stomach, intestines, liver, pancreas, and gallbladder. They handle issues like acid reflux, ulcers, IBS, Crohn’s disease, liver disease, and more. Gastroenterologists also perform endoscopic procedures to view the inside of the GI tract and treat problems through minimally invasive techniques.',
        fees: 6500,
        address: {
            line1: '21th New Yard',
            line2: 'Pavel Street, Gampaha'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Thushara Peris',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Thushara educate patients about reproductive health, family planning, and sexually transmitted infections.',
        fees: 7500,
        address: {
            line1: '112 High Street',
            line2: 'Club Road, Kadawatha'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Emily Davis',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Emily contribute in various procedures including biopsies, mole removals, and treatments for nail conditions.',
        fees: 5500,
        address: {
            line1: '37th Aveno Clamp',
            line2: 'Colombo 7'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Daniel Martin',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'PHD',
        experience: '5 Years',
        about: 'Dr. Daniel is devoted to the health and well-being of children, offering compassionate and thorough pediatric care.',
        fees: 4000,
        address: {
            line1: 'No.388 Dr.Kolwin R',
            line2: 'De.Silva Road, Colombo 2'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Ridmi Dias',
        image: doc11,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Ridmi believes in a patient-centered approach, ensuring personalized care for each patient. She emphasizes the importance of early detection and prevention, helping patients maintain and improve their digestive health through a combination of lifestyle changes, medication, and advanced treatment options.', 
        fees: 3500,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Onel Weerathunga',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MD, Neurology',
        experience: '4 Years',
        about: 'Dr. Onel evaluate patients with neurological symptoms, such as headaches, seizures, weakness to diagnose conditions accurately.',
        fees: 25000,
        address: {
            line1: '23 Richmond Road',
            line2: 'Colombo 3'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Janu Peris',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Janu focus on building long-term relationships with patients, understanding their medical history, and addressing their overall health needs.',
        fees: 2500,
        address: {
            line1: '246 Queen Street',
            line2: 'Church Road, Colombo'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Khan',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Riyan provide a wide range of healthcare services, including routine examinations, preventive care, and treatment of various gynecological conditions.',
        fees: 18000,
        address: {
            line1: '166, Thibirigasyaya Road',
            line2: 'Colombo 5'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Shalini Perera',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS,PHD',
        experience: '7 Years',
        about: 'Dr. Amila evaluate, diagnose, and treat various skin conditions, including common issues like acne and eczema, as well as more complex diseases such as skin cancers.',
        fees: 7000,
        address: {
            line1: '43rd Street, Downtown',
            line2: 'Main street,Colombo'
        }
    },
]