import React from 'react';
import { Box, Button } from '@adminjs/design-system';
import axios from 'axios';
import XLSX from 'xlsx';

const DownloadUsers = () => {
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        'http://localhost:3000/users/download-users-to-excel/',
      );
      const today = new Date();
      const formatedToday = `${today.getFullYear()}_${
        today.getMonth() + 1
      }_${today.getDate()}`;
      const userData = XLSX.utils.json_to_sheet(data.data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, userData, formatedToday);
      XLSX.writeFile(workbook, `KinderMate_Users_${formatedToday}.xlsx`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box marginBottom={20}>
      <Button onClick={fetchData}>Download Excel File</Button>
    </Box>
  );
};

export default DownloadUsers;
