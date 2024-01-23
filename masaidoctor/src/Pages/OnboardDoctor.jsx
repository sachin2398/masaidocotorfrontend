import React, { useState } from 'react';
import { ChakraProvider, Box, Heading, FormControl,Stack, FormLabel, Input, Button } from '@chakra-ui/react';
import axios from 'axios';
export default function OnboardDoctor() {
    const [formData, setFormData] = useState({
      name: '',
      image: '',
      specialization: '',
      experience: 0,
      location: '',
      date: '',
      slots: 0,
      fee: 0,
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
        const response = await axios.post('http://localhost:8000/appointments/appointments', formData);
        console.log('Data posted successfully:', response.data);
      } catch (error) {
        console.error('Error posting data:', error);
      }
    };
  
    return (
        <ChakraProvider>
        <Box p={8} borderWidth="1px" borderRadius="lg" boxShadow="md" maxW="xl" mx="auto">
          <Heading mb={4} textAlign="center">
            Doctor Form
          </Heading>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              {/* Wrap the form controls in a grid container */}
              <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gridGap={4}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </FormControl>
  
                <FormControl>
                  <FormLabel>Image URL</FormLabel>
                  <Input type="text" name="image" value={formData.image} onChange={handleChange} required />
                </FormControl>
  
                <FormControl>
                  <FormLabel>Specialization</FormLabel>
                  <Input
                    type="text"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
  
                <FormControl>
                  <FormLabel>Experience</FormLabel>
                  <Input
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
  
                <FormControl>
                  <FormLabel>Location</FormLabel>
                  <Input type="text" name="location" value={formData.location} onChange={handleChange} required />
                </FormControl>
  
                <FormControl>
                  <FormLabel>Date</FormLabel>
                  <Input
                    type="datetime-local"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
  
                <FormControl>
                  <FormLabel>Slots</FormLabel>
                  <Input type="number" name="slots" value={formData.slots} onChange={handleChange} required />
                </FormControl>
  
                <FormControl>
                  <FormLabel>Fee</FormLabel>
                  <Input type="number" name="fee" value={formData.fee} onChange={handleChange} required />
                </FormControl>
              </Box>
  
              <Button type="submit" colorScheme="teal" width="100%">
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </ChakraProvider>
    );
  };