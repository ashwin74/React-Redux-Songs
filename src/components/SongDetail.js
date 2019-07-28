import React from 'react';
import { connect } from 'react-redux';

//3
const SongDetail = ({ song }) => { //{song} === props.song
    if(!song)
    {
        return <div>Select a Song</div>;
    }

    return (
        <div>
            <h3>Details for: </h3>
            <p>
                Title: {song.title}
                <br/>
                Duration: {song.duration}
            </p>
        </div>
    )
};

//1
const mapStateToProps = (state) => {
    return { song: state.selectedSong };
}

//2
export default connect(mapStateToProps)(SongDetail);