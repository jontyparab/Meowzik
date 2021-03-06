//We are making a model here, instead of a namespaced module in vuex as we are never going to mutate these properties I guess...
class SongModel {
    constructor(id, name, audioTrack, artists, album, image, duration, year, subtitles, codec) {
        this.id = id;
        this.audioTrack = audioTrack;
        this.name = name;
        this.artists = artists || ['<unknown>'];
        this.album = album || '<unknown>';
        this.image = image;
        this.duration = duration;
        this.year = year || '<unknown>';
        this.subtitles = subtitles || 'No Lyrics Found';
        this.codec = codec || '<unknown>';
    }
}

export default SongModel;