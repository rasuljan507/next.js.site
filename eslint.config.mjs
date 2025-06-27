import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ВОТ ЭТОТ БЛОК МЫ ДОБАВИЛИ
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn", // Меняем ошибку на предупреждение
      "@typescript-eslint/no-explicit-any": "warn",  // Тоже меняем на предупреждение
    },
  },
];

export default eslintConfig;