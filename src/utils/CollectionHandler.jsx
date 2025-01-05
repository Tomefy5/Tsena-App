import { nanoid } from "nanoid/non-secure";

export function UpdateListCollectionsLS(collections) {
    localStorage.setItem('collections', JSON.stringify(collections));
}

export function CreateNewCollections(setCollections) {
    const collectionName = document.getElementById('collection-name-field').value;
    
    if (collectionName === null || collectionName === '') throw new  Error('Collection name must be different of empty or null');

    const newCollection = {
        id: nanoid(),
        name: collectionName,
        elements: []
    }

    const prevCollections = JSON.parse(localStorage.getItem('collections'));
    const newCollections = [...prevCollections, newCollection];

    localStorage.setItem('collection',JSON.stringify(newCollections));
    setCollections(newCollections);
}

export function DeleteCollection(id, setCollections) {
    setCollections((prevCollections) => (
        prevCollections.filter(collection => collection.id !== id)
    ));
};

export function SetCollectionData(collectionName) {
    const collectionNameField = document.getElementById('collection-name-field');

    if(!collectionNameField) throw new Error('The element with id \'collection-name-field\' doesn\'t exist');

    collectionNameField.value = collectionName;
}

export function SaveEditedCollection(id, setCollections) {
    const newCollectionName = document.getElementById('collection-name-field').value;

    setCollections((prevCollections) => (
        prevCollections.map((collection) => (
            collection.id === id 
            ? {...collection, name: newCollectionName}
            : collection
        ))
    ))
};