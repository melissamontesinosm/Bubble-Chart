
import { Chart } from 'chart.js/auto';

export default class ChartComponent {
    constructor(ctx, type, data, options) {
        this.chart = new Chart(ctx, {
            type,
            data,
            options,
        });
    }
}

