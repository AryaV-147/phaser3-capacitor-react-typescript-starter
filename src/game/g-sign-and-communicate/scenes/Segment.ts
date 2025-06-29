export default interface Segment {
    isSegmentCompleted: boolean;
    Start : () => void;
    End : () => void;
}