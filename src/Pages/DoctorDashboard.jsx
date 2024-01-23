import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Stack,
  Heading,
  Text,
  Button,
  Grid,
  GridItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import axios from 'axios';

const DoctorCard = ({ doctor, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDoctor, setEditedDoctor] = useState(doctor);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    // Call your API to update the doctor's details
    onEdit(editedDoctor);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    // Call your API to delete the doctor
    onDelete(doctor);
  };

  const handleInputChange = (e) => {
    setEditedDoctor({
      ...editedDoctor,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} m={2}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Heading as="h3" size="md">Name:
            {doctor.name}
          </Heading>
          <Text>Specialization: {doctor.specialization}</Text>
          <Text>Location: {doctor.location}</Text>
          <Text>Date: {doctor.date}</Text>
          <Text>slots: {doctor.slots}</Text>
        </Box>
        <Stack direction="row" spacing={4}>
          <Button colorScheme="teal" onClick={handleEditClick}>
            Edit
          </Button>
          <Button colorScheme="red" onClick={handleDeleteClick}>
            Delete
          </Button>
        </Stack>
      </Stack>

      {isEditing && (
        <Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Doctor</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={editedDoctor.name}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Specialization</FormLabel>
                <Input
                  type="text"
                  name="Specialization"
                  value={editedDoctor.Specialization}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Location</FormLabel>
                <Input
                  type="text"
                  name="Location"
                  value={editedDoctor.Location}
                  onChange={handleInputChange}
                />
              </FormControl>
              {/* Add other input fields for editing */}
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleSaveEdit}>
                Save
              </Button>
              <Button onClick={() => setIsEditing(false)}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

const DoctorList = ({ doctors, onDelete, onEdit }) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {doctors.map((doctor) => (
        <GridItem key={doctor._id}>
          <DoctorCard doctor={doctor} onDelete={onDelete} onEdit={onEdit} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default function DoctorDashboard(){
    const [doctors, setDoctors] = useState([]);
  
    useEffect(() => {
      // Fetch data from your API
      axios.get('https://mock3-l3c9.onrender.com/appointments/appointments')
        .then((response) => setDoctors(response.data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
  
    const handleDeleteDoctor = (deletedDoctor) => {
      // Call your API to delete the doctor
      // Update the UI by removing the deleted doctor from the state
      setDoctors((prevDoctors) => prevDoctors.filter((doctor) => doctor._id !== deletedDoctor._id));
    };
  
    const handleEditDoctor = (editedDoctor) => {
      // Call your API to update the doctor
      // Update the UI by replacing the edited doctor in the state
      setDoctors((prevDoctors) =>
        prevDoctors.map((doctor) =>
          doctor._id === editedDoctor._id ? editedDoctor : doctor
        )
      );
    };
  
    const handleFilter = (specialization) => {
      // Filter doctors based on specialization
      const filteredDoctors = specialization
        ? doctors.filter((doctor) => doctor.specialization === specialization)
        : doctors;
      setDoctors(filteredDoctors);
    };
  
    const handleSortByDate = () => {
      // Sort doctors by date
      const sortedDoctors = [...doctors].sort((a, b) => new Date(a.date) - new Date(b.date));
      setDoctors(sortedDoctors);
    };
  
    const handleSearch = (searchTerm) => {
      // Search doctors by name
      const searchedDoctors = doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setDoctors(searchedDoctors);
    };
  
    return (
      <ChakraProvider>
        <Box p={8}>
          <Heading mb={4} textAlign="center">
            Doctor Management
          </Heading>
          {/* Add Filter, Sort, and Search components here */}
          <DoctorList doctors={doctors} onDelete={handleDeleteDoctor} onEdit={handleEditDoctor} />
        </Box>
      </ChakraProvider>
    );
  };
