import { useEffect } from 'react';
import { Scene } from '@babylonjs/core';
import { Character } from '../models/characters';

export const useSceneSetup = () => {
  useEffect(() => {
    // シーンのセットアップロジック
  }, []);

  const initScene = (scene: Scene) => {
    // シーン初期化ロジック
  };

  const addCharacter = (scene: Scene, character: Character) => {
    // キャラクター追加ロジック
  };

  const setupInteractions = (scene: Scene, onCharacterClick: (character: Character) => void) => {
    // インタラクション設定ロジック
  };

  return { initScene, addCharacter, setupInteractions };
} 