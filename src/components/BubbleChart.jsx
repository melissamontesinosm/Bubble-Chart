
import ChartComponent from './src/components/ChartComponent.js';

async function renderBubbleChart() {
    const financialData = await loadFinancialData();

    // Transform data for Bubble Chart (Sales, Profits, Expenses)
    const bubbleData = financialData.map((item) => ({
        x: item.sales,
        y: item.profits,
        r: item.expenses / 100, // Scale expenses for bubble size
    }));

    const ctx = document.getElementById('bubbleChart').getContext('2d');

    new ChartComponent(ctx, 'bubble', {
        datasets: [
            {
                label: 'Financial Overview',
                data: bubbleData,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    }, {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context) => `Sales: ${context.raw.x}, Profits: ${context.raw.y}, Expenses: ${context.raw.r * 100}`,
                },
            },
        },
    });
}

renderBubbleChart();

