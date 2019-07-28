import { combineReducers } from 'redux';

const songsReducers = () => {
    return [
        {title: 'I wanna', duration: '2:45'},
        {title: 'Ooo la la', duration: '4:32'},
        {title: 'Come fo', duration: '1:43'},
        {title: 'Go Idiot', duration: '8:34'},
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type == 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducers,
    selectedSong: selectedSongReducer
});