
import ImageGallery from '../ImageGallery/';
import { Wrapper } from './App.styled';
import { Searchbar } from '../Searchbar';
import Button from '../Button';
import faechAPI from '../faechAPI';
import Modal from '../Modal';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

   

  useEffect(() => {
    
    if (input !== '') {
      setLoading(true);
      const fn = async () => {
        try {
          const dataArray = await faechAPI(input, page);
          if (dataArray.length < 1) {
            return alert('error, data is empty')
          }
          if (page !== 1) {
            setPhotos(prevPhotos => [...prevPhotos, ...dataArray]);
          }

          else {
            setPhotos([...dataArray]);
          }
        } catch (arr) {
          alert('Data EROR');
          
        } finally {
          setLoading(false);
        }
      }
    
      fn();
      
    }
  }, [input, page]);
  

  
  

  const modalOn = data => {
    setData(data);
    setShowModal(!showModal);
  };
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      modalOn();
    }
  };

  const submitForm = value => {
    if (value === "") {alert("input is ampty")}
    setInput(value)
    setPage(1)
  };
  
  
  const nextPage = () => {
    setLoading(true);
    setPage(prevState => prevState + 1)
  };
  
    return (
      <>
        <Searchbar
          submitForm={submitForm}
        />
        {loading && <Loader/>}

        {showModal && (
          <Modal pictur={data} modalOn={modalOn} handleKeyDown={handleKeyDown} />
        )}
        {!photos.length ? (
          ''
        ) : (
          <>
            <Wrapper>
              <ImageGallery
                arrayPictures={photos}
                modalOn={modalOn}
              />
            </Wrapper>
            <Button nextPage={nextPage} />
          </>
        )}
      </>
    );
  }
// }
export default App