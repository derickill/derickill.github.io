import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2024',
    title: 'Terminale S',
    subtitle: 'baccalauréat S',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2024',
    title: 'Stage data',
    subtitle: 'Stagiaire Data Scientist, Société Générale CI',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2024',
    title: 'competition mathematique',
    subtitle: 'Compétition Mathématique Nationale IvoirScience',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2025',
    title: 'Stage BI & Data Science,',
    subtitle: 'Stagiaire BI & Data Scientist pour OAWJ Consulting',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: '?',
    subtitle: 'Un stage chez vous ?',
    position: 'right',
  }
]