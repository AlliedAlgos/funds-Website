import PocketBase from 'pocketbase';

// Replace with your actual server URL
export const pb = new PocketBase('https://pb.robotics-catalyst.org');

// Optional: Disable auto-cancellation if you have multiple 
// simultaneous fetches on one page