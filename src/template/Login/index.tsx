import Image from 'next/image';
import { SendPlane } from '@styled-icons/remix-fill/SendPlane';
// import * as S from './styles'
import { CSSObjectWithLabel } from 'react-select';
import { useState } from 'react';
import { api } from 'lib/axios';

export default function LoginPage() {
  // const racasDog = [  'Escolha uma raça de cachorro',
  // 'Afegão Hound',
  // 'Affenpinscher',
  // 'Airedale Terrier',
  // 'Akita',
  // 'American Staffordshire Terrier',
  // 'Basenji',
  // 'Basset Hound',
  // 'Beagle',
  // 'Beagle Harrier',
  // 'Bearded Collie',
  // 'Bedlington Terrier',
  // 'Bichon Frisé',
  // 'Bloodhound',
  // 'Bobtail',
  // 'Boiadeiro Australiano',
  // 'Boiadeiro Bernês',
  // 'Border Collie',
  // 'Border Terrier',
  // 'Borzoi',
  // 'Boston Terrier',
  // 'Boxer',
  // 'Buldogue Francês',
  // 'Buldogue Inglês',
  // 'Bull Terrier',
  // 'Bulmastife',
  // 'Cairn Terrier',
  // 'Cane Corso',
  // 'Cão de Água Português',
  // 'Cão de Crista Chinês',
  // 'Cavalier King Charles Spaniel',
  // 'Chesapeake Bay Retriever',
  // 'Chihuahua',
  // 'Chow Chow',
  // 'Cocker Spaniel Americano',
  // 'Cocker Spaniel Inglês',
  // 'Collie',
  // 'Coton de Tuléar',
  // 'Dachshund',
  // 'Dálmata',
  // 'Dandie Dinmont Terrier',
  // 'Dobermann',
  // 'Dogo Argentino',
  // 'Dogue Alemão',
  // 'Fila Brasileiro',
  // 'Fox Terrier (Pelo Duro e Pelo Liso)',
  // 'Foxhound Inglês',
  // 'Galgo Escocês',
  // 'Galgo Irlandês',
  // 'Golden Retriever',
  // 'Grande Boiadeiro Suiço',
  // 'Greyhound',
  // 'Grifo da Bélgica',
  // 'Husky Siberiano',
  // 'Jack Russell Terrier',
  // 'King Charles',
  // 'Komondor',
  // 'Labradoodle',
  // 'Labrador Retriever',
  // 'Lakeland Terrier',
  // 'Leonberger',
  // 'Lhasa Apso',
  // 'Lulu da Pomerânia',
  // 'Malamute do Alasca',
  // 'Maltês',
  // 'Mastife',
  // 'Mastim Napolitano',
  // 'Mastim Tibetano',
  // 'Norfolk Terrier',
  // 'Norwich Terrier',
  // 'Papillon',
  // 'Pastor Alemão',
  // 'Pastor Australiano',
  // 'Pinscher Miniatura',
  // 'Poodle',
  // 'Pug',
  // 'Rottweiler',
  // 'ShihTzu',
  // 'Silky Terrier',
  // 'Skye Terrier',
  // 'Staffordshire Bull Terrier',
  // 'Terra Nova',
  // 'Terrier Escocês',
  // 'Tosa',
  // 'Weimaraner',
  // 'Welsh Corgi (Cardigan)',
  // 'Welsh Corgi (Pembroke)',
  // 'West Highland White Terrier',
  // 'Whippet',
  // 'Xoloitzcuintli',
  // 'Yorkshire Terrier',
  // 'Outros']

  // const racas = [
  //     'Escolha  uma raça de gato',
  //     'Abissínio',
  //     'American Curl',
  //     'American Shorthair',
  //     'American Wirehair',
  //     'Angorá Turco',
  //     'Ashera',
  //     'Azul Russo',
  //     'Balinês',
  //     'Bambino',
  //     'Bengal',
  //     'Birmanês',
  //     'Bobtail Americano',
  //     'Bobtail Japonês',
  //     'Bombaim',
  //     'British Longhair',
  //     'British Shorthair',
  //     'Burmilla',
  //     'Caracat',
  //     'Ceilão',
  //     'Chantilly-Tiffany',
  //     'Charteux',
  //     'Chausie',
  //     'Colorpoint',
  //     'Cornish Rex',
  //     'Cymric',
  //     'Devon Rex',
  //     'Don Sphynx (Donskoy)',
  //     'Elfo',
  //     'Europeu',
  //     'German Rex',
  //     'Havana',
  //     'Highland Fold',
  //     'Himalaio',
  //     'Javanês',
  //     'Khao Manee',
  //     'Korat',
  //     'Kurilian Bobtail',
  //     'LaPerm',
  //     'Levkoy Ucraniano',
  //     'Lykoi (Gato Lobo)',
  //     'Maine Coon',
  //     'Manx',
  //     'Mau Egípicio',
  //     'Minskin',
  //     'Mist Australiano',
  //     'Munchkin',
  //     'Nebelung',
  //     'Neva Masquerade',
  //     'Norueguês da Floresta',
  //     'Ocicat',
  //     'Oriental Shorthair',
  //     'Persa',
  //     'Peterbald',
  //     'Pixie-Bob',
  //     'Ragamuffin',
  //     'Ragdoll',
  //     'Sagrado da Birmânia',
  //     'Savannah',
  //     'Scottish Fold',
  //     'Selkirk Rex',
  //     'Selvagem',
  //     'Siamês',
  //     'Siberiano',
  //     'Singapura',
  //     'Skookum',
  //     'Snowshoe',
  //     'Sokoke',
  //     'Somali',
  //     'Sphynx',
  //     'Tonquinês',
  //     'Toyger',
  //     'Turkish Van',
  //     'Ural Rex',
  //     'Outros'
  //   ];

  //   racas.map((v, index) =>
  //   api.post('/breed', [{
  //     id: 0,
  //     name: v,
  //     type_animal_id: 2,
  //     status: 1
  //   }])
  //   )

  const handleSubmit = async () => {
    console.log('');
  };

  const [values, setValues] = useState({});

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  return (
    <div>
      <input
        type="text"
        onChange={(v) => handleInput('email', v.target.value)}
      />
      <input
        type="text"
        onChange={(v) => handleInput('password', v.target.value)}
      />
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
}
