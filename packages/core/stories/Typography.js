import React from 'react';
import Typography from '../src/Typography';

const TypographyExample = ({classes}) => (
  <div>
    <div style={{width: '100%', maxWidth: 500}}>
      <Typography variant="display4" gutterBottom>
        Display 4
      </Typography>
      <Typography variant="display3" gutterBottom>
        Display 3
      </Typography>
      <Typography variant="display2" gutterBottom>
        Display 2
      </Typography>
      <Typography variant="display1" gutterBottom>
        Display 1
      </Typography>
      <Typography variant="headline" gutterBottom>
        Headline
      </Typography>
      <Typography variant="title" gutterBottom>
        Title
      </Typography>
      <Typography variant="subheading" gutterBottom>
        Subheading
      </Typography>
      <Typography variant="body2" gutterBottom>
        Body 2
      </Typography>
      <Typography variant="body1" gutterBottom align="right">
        Body 1
      </Typography>
      <Typography variant="caption" gutterBottom align="center">
        Caption
      </Typography>
      <Typography gutterBottom noWrap>
        {`
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        `}
      </Typography>
      <Typography variant="button" gutterBottom>
        Button
      </Typography>
    </div>
  </div>
)

export default TypographyExample

export const settings = {
  info: {
    propTables: [ Typography ],
    text: `
      ### Use typography to present your design and content as clearly and efficiently as possible.

      ## 
    `
  }
}
