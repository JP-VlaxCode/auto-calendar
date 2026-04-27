const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Verifies that package.json exists in the current working directory.
 * If not, attempts to find it by traversing upwards.
 */
function validateProjectRoot() {
  let currentDir = process.cwd();
  
  while (true) {
    const packageJsonPath = path.join(currentDir, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      process.chdir(currentDir);
      return true;
    }
    
    const parentDir = path.dirname(currentDir);
    if (parentDir === currentDir) {
      break;
    }
    currentDir = parentDir;
  }

  console.error('Error: Could not find package.json in the current directory or any parent directories.');
  console.error('Please ensure you are running this script from within the project root.');
  process.exit(1);
}

// Execute validation before proceeding with build
validateProjectRoot();

try {
  console.log('Starting build process...');
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}