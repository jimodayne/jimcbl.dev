import { createApi } from 'unsplash-js';
import { IPhoto, photos } from './props';
import { Suspense } from 'react';
import { SOCIAL_NETWORK_LINKS } from '../props';

const getData = async (): Promise<IPhoto[]> => {
  //   const unsplash = createApi({
  //     accessKey: process.env.UNSPLASH_ACCESS_KEY || '',
  //   });

  //   unsplash.users.getPhotos({ username: 'jimcbl' }).then((result) => {
  //     if (result.errors) {
  //       //   console.log('error occurred: ', result.errors[0]);
  //       throw new Error('Failed to fetch data');
  //     }

  //     console.log('result.response.results >> ', result.response.results);
  //     return result.response.results;
  //   });
  //   setTimeout(() => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(photos as IPhoto[]);
    }, 2000)
  );
};

const Photo = async () => {
  const data = await getData();

  const splitIntoColumns = (arr: IPhoto[], columns: number) => {
    const res: any = [];
    for (let i = 0; i < arr.length; i++) {
      const column = i % columns;
      if (res[column]) {
        res[column].push(arr[i]);
      } else {
        res[column] = [arr[i]];
      }
    }
    return res as IPhoto[][];
  };

  const threeColumns = splitIntoColumns(data, 3);

  //   if (!data) {
  //     return <h1>Loading...</h1>;
  //   }

  return (
    <div className="pb-8">
      <h1 className="font-bold text-3xl">Photo</h1>
      <p className="py-5 text-sm">
        Here are some of my photos. You can find more on my{' '}
        <a target="_blank" href={SOCIAL_NETWORK_LINKS.unsplash}>
          <span className="underline font-bold decoration-sky-400 transition duration-300 hover:decoration-sky-600">
            Unsplash
          </span>
        </a>
        .
      </p>
      <Suspense fallback={<div>Loading ... </div>}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {threeColumns.map((column, index) => (
            <div key={index} className="grid flex-wrap gap-6 content-start">
              {column.map((photo) => (
                <a title={photo.alt_description} key={photo.id} target="_blank" href={photo.links.html}>
                  <img
                    className="hover:scale-[102%] duration-300 ease-in-out transition-all"
                    src={photo.urls.regular}
                    loading="lazy"
                    alt={photo.alt_description}
                  />
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="text-center md:pt-4 pt-8">
          <a href="https://unsplash.com/@jimcbl" target="_blank" rel="noreferrer">
            <button className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg  dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">
              More on Unsplash
            </button>
          </a>
        </div>
      </Suspense>
    </div>
  );
};

export default Photo;
