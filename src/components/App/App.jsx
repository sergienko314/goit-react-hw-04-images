import { Component } from 'react';
import ImageGallery from '../ImageGallery/';
import { Wrapper } from './App.styled';
import { Searchbar } from '../Searchbar';
import Button from '../Button';
import faechAPI from '../faechAPI';
import Modal from '../Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    photos: [],
    page: 1,
    status: 'idle',
    showModal: false,
    input: '',
    submit: true,
    data: null,
    loading: false,
  };
  notify = () => toast('Wow so easy!');

  returnInpet = input => {
    this.setState({ input: input });
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.input !== prevState.input ||
      this.state.page !== prevState.page
    ) {
      this.setState({ loading: true });
      const data = await faechAPI(this.state.input, this.state.page)
        .catch(err => console.log(err))
        .finally(this.setState({ loading: false }));
      if (this.state.page !== 1) {
        this.setState(prevState => ({
          photos: [...prevState.photos, ...data],
        }));
      } else {
        this.setState({
          photos: [...data],
        });
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  modalOn = data => {
    this.setState(prevState => ({ showModal: !prevState.showModal, data }));
  };
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.modalOn();
    }
  };

  submitForm = value => {
    this.setState({ input: value, page: 1 });
    this.state.photos.length && this.notify();
  };

  nextPage = async () => {
    this.setState(prevState => ({ loading: true, page: prevState.page + 1 }));
  };

  render() {
    if (this.state.status === 'idle') {
      return (
        <>
          <Searchbar
            submitForm={this.submitForm}
            returnInpet={this.returnInpet}
          />

          <ToastContainer />
          {this.state.showModal && (
            <Modal pictur={this.state.data} modalOn={this.modalOn} />
          )}
          {!this.state.photos.length ? (
            ''
          ) : (
            <>
              <Wrapper>
                <ImageGallery
                  arrayPictures={this.state.photos}
                  modalOn={this.modalOn}
                />
              </Wrapper>
              {/* {this.state.loading && <Loader />} */}
              <Button nextPage={this.nextPage} />
            </>
          )}
        </>
      );
    }
  }
}
