import { Character } from '../../models/characters';
import { CharacterRole } from '../../models/characters';

// 仮のデータを返す fetchCharacters 関数の例
export const fetchCharacters = async (sceneId: string): Promise<Character[]> => {
  // APIからキャラクターデータをフェッチするロジックをここに実装
  // 以下はダミーデータの例
  return [
    {
      id: 'char1',
      name: 'Character One',
      role: CharacterRole.ADVISOR,
      model: 'path/to/model.glb',
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
      animations: [],
      interactionZone: {
        radius: 1,
        height: 2,
        triggerDistance: 0.5
      },
      metadata: {
        description: 'A helpful character.',
        dialogues: [],
        availability: {
          workDays: [1, 2, 3, 4, 5],
          workHours: { start: 9, end: 17 }
        }
      }
    }
  ];
}; 