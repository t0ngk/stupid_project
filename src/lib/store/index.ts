import { writable } from 'svelte/store';

export const selectItem = writable<string[]>([]);
