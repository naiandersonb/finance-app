import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { v4 as createId } from 'uuid';
import { storage } from '../libs/firebase';
import { Photo } from '../types/Photo';

export const getAll = async () => {
  let list: Photo[] = [];

  // cria referência da pasta
  const imagesFolder = ref(storage, 'images');

  // lê os arquivos que estão dentro da pasta
  const photoList = await listAll(imagesFolder);

  // insere os arquivos na lista
  for (let i in photoList.items) {

    // gera um link de download
    let photoUrl = await getDownloadURL(photoList.items[i]);

    list.push({
      name: photoList.items[i].name,
      url: photoUrl,
    });
  }

  return list;
}

export const insert = async (file: File) => {
  if (['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {

    let randomName = `react-gallery-${createId()}`;
    let newFile = ref(storage, `images/${randomName}`);

    let upload = await uploadBytes(newFile, file);
    let photoUrl = await getDownloadURL(upload.ref);

    return { name: upload.ref.name, url: photoUrl } as Photo;

  } else {
    return new Error('Tipo de arquivo não permitido');
  }
}
