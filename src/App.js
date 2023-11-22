import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Swal from 'sweetalert2';
import axios from 'axios';

// Component
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import LoadingView from './components/Loading';

// API
import { baseAPI } from './services/baseAPI';

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [listKode, setListKode] = useState([
    {label: "Butiran sorghum. - Lain-lain (10079000)", value: "10079000"}
  ])
  const [dataBarang, setDataBarang] = useState({
    kode_barang: null,
    nilai_komoditas: null
  })


  const storeDataBarang = async () => {   
    setIsLoading(true);
    const body = new FormData();
    body.append('data', JSON.stringify(dataBarang));

    baseAPI
      .post(`/test/storebarang`, body, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        Swal.fire({
          icon: 'success',
          title: "New data has been added.",
          showConfirmButton: false,
          timer: 1500
        });
        console.log(`berhasil upload ${JSON.stringify(res)}`);
        window.location.reload();
      })
      .catch((error) => {
        setIsLoading(false);
        console.log('error: ', error);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  const addView = () => (
    <div className='row row-deck row-cards' style={{margin: 10}}>
      <div className='col-md-12'>
        <div className='card'>
          <div className='card-body'>
            <div className='row'>
              <div className='mb-3'>
                <p style={{fontSize: 25}}><b>Service Simulasi Biaya Import</b></p>
              </div>

              {/* Kode Barang */}
              <div className='col-md-6 mb-3'>
                <label htmlFor='true' className='form-label'>
                  Kode Barang
                </label>
                  <Select
                    options={listKode}
                    placeholder="Pilih kode barang"
                    onChange={e => {
                      setDataBarang({...dataBarang, kode_barang: e.value})
                    }}
                  />
              </div>

              {/* Nilai Komoditas */}
              <div className='col-md-6 mb-3'>
                <label htmlFor='true' className='form-label'>
                  Nilai Komoditas
                </label>
                <input
                  placeholder='Masukan nilai komoditas'
                  className="form-control"
                  onChange={e => setDataBarang({...dataBarang, nilai_komoditas: e.target.value})}
                />
              </div>

              <div className='col-md-12'>
                <button
                  disabled={dataBarang.kode_barang !== null && dataBarang.nilai_komoditas !== null ? false : true}
                  type="button"
                  className='btn btn-primary col-md-12'
                  style={{backgroundColor: '#45CFDD'}}
                  onClick={() => storeDataBarang()}
                >
                  Save
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
  <>
    <Header />
    <ScrollToTop />
    <div className='content'>
      {isLoading ? <LoadingView /> : addView()}
    </div>
  </>
  );
}

export default App;
