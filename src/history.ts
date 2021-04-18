import { createMemoryHistory } from "history";

const DEFAULT_INITIAL_ENTRIES = ['/']

/**
 * Returns a memory history to be used for rendering routes in non-browser environments
 */
export const getHistoryForTest = (initialEntries = DEFAULT_INITIAL_ENTRIES) => createMemoryHistory({ initialEntries })
