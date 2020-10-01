import React, { useState } from 'react';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [error, setError] = useState('');

  const types = ['image/png', 'image/jpeg'];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setFileUrl(URL.createObjectURL(selected));
      setError('');
    } else {
      setFile(null);
      setFileUrl(null);
      setError('Please select valid image file (png or jpeg)');
    }
  };
  return (
    <div className='upload-form'>
      <form>
        <input type='file' onChange={changeHandler} />
        <div className='output'>
          {error && <div className='error'>{error}</div>}
          {file && (
            <div>
              <img
                style={{ width: '100px', height: '219px' }}
                src={fileUrl}
                alt='preview image'
              />
              <div>{file.name}</div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
