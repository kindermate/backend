import React from 'react';
import { Box, Label } from '@adminjs/design-system';

const AnswersValues = (props) => {
  const { record } = props;
  let ctt = [];
  let mat = [];
  let pbt = [];
  for (const [key, value] of Object.entries(record.params)) {
    if (key.includes('answers')) {
      if (key.includes('CTT')) {
        ctt.push(value);
      }
      if (key.includes('MAT')) {
        mat.push(value);
      }
      if (key.includes('PBT')) {
        pbt.push(value);
      }
    }
  }
  return (
    <Box marginBottom={20}>
      <Label color="#898A9A" fontWeight={300}>
        Answers
      </Label>
      <div>
        {ctt} {mat} {pbt}
      </div>
    </Box>
  );
};

export default AnswersValues;
