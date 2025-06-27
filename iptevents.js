/**
 * iptEvents - Simple Event Listener Manager
 * Author: IlPlayerTop
 * License: Custom
 */

const iptEvents = {
    /**
     * Adds an event listener to a DOM element.
     * @param {string} selector - CSS selector of the element.
     * @param {string} eventType - Type of the event (e.g., 'click', 'input').
     * @param {Function} callback - Function to execute on event.
     */
    on(selector, eventType, callback) {
        const element = document.querySelector(selector);
        if (!element) {
            console.error(`[iptEvents] Element "${selector}" not found.`);
            return;
        }
        element.addEventListener(eventType, callback);
    },

    /**
     * Removes an event listener from a DOM element.
     * @param {string} selector - CSS selector of the element.
     * @param {string} eventType - Type of the event.
     * @param {Function} callback - Function to remove.
     */
    off(selector, eventType, callback) {
        const element = document.querySelector(selector);
        if (!element) {
            console.error(`[iptEvents] Element "${selector}" not found.`);
            return;
        }
        element.removeEventListener(eventType, callback);
    }
};

// Example usage:
// iptEvents.on('#playButton', 'click', () => console.log('Play clicked'));
// iptEvents.off('#playButton', 'click', callbackReference);

module.exports = iptEvents;
