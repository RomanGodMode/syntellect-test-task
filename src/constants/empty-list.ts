// если каждый рендер создавать пустой массив через []
// -> в некоторых ситуациях это может привести к лишним рендерам компонентов обёрнутых в memo
// или к лишним срабатываниям useEffect
export const EMPTY_LIST = []