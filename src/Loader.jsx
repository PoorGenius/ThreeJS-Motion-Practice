import { useProgress } from '@react-three/drei';

function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress();
    return active ? <div>Loading: {progress.toFixed(2)}%</div> : null;
}

export default Loader;