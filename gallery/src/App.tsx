import { FormEvent, useEffect, useState } from 'react';
import * as C from './App.styles';
import { PhotoItem } from './PhotoItem';
import * as Photos from './services/photos';
import { Photo } from './types/Photo';

export const App = () => {
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [listPhotos, setListPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      setListPhotos(await Photos.getAll());
      setLoading(false);
    };

    getPhotos();
  }, []);

  const handleFormSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);
    const file = formData.get('image') as File;

    if (file && file.size > 0) {
      setUploading(true);
      // faz o envio do arquivo
      let result = await Photos.insert(file);
      setUploading(false);

      if (result instanceof Error) {
        alert(`${result.name} - ${result.message}`);
      } else {
        let newPhotoList = [...listPhotos];
        newPhotoList.push(result);
        setListPhotos(newPhotoList);
      }
    }


  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>

        <C.UploadForm method='POST' onSubmit={handleFormSubmit}>
          <input type="file" name='image' />
          <input type="submit" value='Enviar' />
          {uploading && 'Enviando...'}
        </C.UploadForm>

        {loading &&
          <C.ScreenWarning>
            <div className='emoji'>✋</div>
            <div>Carregando...</div>
          </C.ScreenWarning>
        }

        {!loading && listPhotos.length > 0 &&
          <C.PhotoList>
            {listPhotos.map((item, index) => (
              <PhotoItem
                key={index}
                url={item.url}
                name={item.name}
              />
            ))}
          </C.PhotoList>
        }

        {!loading && listPhotos.length === 0 &&
          <C.ScreenWarning>
            <div className='emoji'>😔</div>
            <div>Não há fotos cadastradas!</div>
          </C.ScreenWarning>
        }

        {/** lista de fotos */}

      </C.Area>
    </C.Container>
  )
}
