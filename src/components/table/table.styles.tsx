import { SxStyleProp } from 'rebass';

export const containerStyles = {
  width: '400px',
  height: '600px',
  overflow: 'scroll'
}

export const tableStyles = {
  borderSpacing: '0',
  borderCollapse: 'separate',
  backgroundColor: 'white',
  borderWidth: '0 1px 1px 0',
  borderColor: 'primary',
  textAlign: 'right',
}

export const theadStyles = {
  padding: "8px",
  borderWidth: '1px 1px 1px 0',
  borderStyle: 'Solid',
  borderColor: 'gray',
  color: 'black',
  fontFamily: 'label',
  fontWeight: 'label',
  fontSize: 'label',
  position: 'sticky',
  top: '0',
  backgroundColor: 'white',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'primaryShade2'
  },
  '&.table-corner': {
    backgroundColor: 'grayShade2',
    borderLeftColor: 'grayShade2',
    borderTopColor: 'grayShade2',
    borderWidth: '0 4px 4px 0',
    left: '0',
    zIndex: '100',
    width: '32px',
    cursor: 'pointer'
  },
  '&.hover-column': {
    backgroundColor: 'grayShade2'
  },
  '&.static-column': {
    borderColor: 'primary',
    borderWidth: '1px',
    position: 'sticky',
    left: '33px',
    zIndex: '100',
    '&.hover-column': {
      backgroundColor: 'primaryShade2'
    },
  }
} as SxStyleProp;

export const trowStyles = {
  color: 'black',
  fontFamily: 'value',
  fontWeight: 'value',
  fontSize: 'value',
  '&:hover': {
    backgroundColor: 'grayShade3',
    'td.static-column': { 
      backgroundColor: 'primaryShade2'
    },
    'th': {
      backgroundColor: 'grayShade2'
    }
  },
  '&:last-child td, &:last-child th': {
    borderBottomColor: 'gray',
  },
  'td, th': {
    padding: "8px",
    
  },
  'th': {
    textAlign: 'center',
    borderWidth: '0 1px 1px 1px',
    borderColor: 'gray',
    borderBottomColor: 'grayShade2',
    borderStyle: 'Solid',
    left: '0',
    position: 'sticky',
    backgroundColor: 'white'
  },
  'td': {
    borderWidth: '0 0 1px 0',
    borderStyle: 'Solid',
    borderColor: 'grayShade2',
    '&:hover': {
      backgroundColor: 'grayShade2'
    },
    '&.hover-column:not(:hover)': {
      backgroundColor: 'grayShade3'
    },
    '&:last-child': {
      borderRightStyle: 'Solid',
      borderRightWidth: '1px',
      borderRightColor: 'gray',
    },
    '&.static-column': {
      backgroundColor: 'white',
      position: 'sticky',
      left: '33px',
      borderRightColor: 'gray',
      borderRightWidth: '1px',
    }
  }
};


export const dropdownStyles = {
  position: 'absolute',
  left: '0',
  top: '32px',
  zIndex: '200'
}
