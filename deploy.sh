#!/bin/bash

echo "🚀 Deploying AI Landing to Railway..."

# Check if Railway CLI is installed
if ! command -v railway &> /dev/null; then
    echo "❌ Railway CLI not found. Installing..."
    npm install -g @railway/cli
fi

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Check if railway.json exists (means project is already linked)
    if [ -f "railway.json" ]; then
        echo "🔄 Deploying to existing Railway project..."
        railway up
    else
        echo "🆕 Creating new Railway project..."
        railway init
        railway up
    fi
    
    echo "🎉 Deployment complete!"
    echo "🌐 Your app should be available at the URL shown above"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi 